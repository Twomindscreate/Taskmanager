from django.db import models
from django.contrib.auth.models import User

class Team(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.team.name}"

class Task(models.Model):
    PENDING = 'P'
    COMPLETE = 'C'
    IN_PROCESS = 'I'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (COMPLETE, 'Complete'),
        (IN_PROCESS, 'In Process')
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='assigned_tasks')
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default=PENDING)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    updated_at = models.DateTimeField(auto_now=True)
    original_task = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name='rescheduled_tasks')

    def __str__(self):
        return self.title

    def reschedule(self, new_due_date):
        if self.status == self.PENDING:
            rescheduled_task = Task.objects.create(
                title=self.title,
                description=self.description,
                assigned_to=self.assigned_to,
                team=self.team,
                status=self.PENDING,
                due_date=new_due_date,
                original_task=self
            )
            return rescheduled_task
        return None

class Feedback(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='feedback')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback by {self.user.username} on {self.task.title}"

class Permission(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    can_create = models.BooleanField(default=False)
    can_read = models.BooleanField(default=True)
    can_update = models.BooleanField(default=False)
    can_delete = models.BooleanField(default=False)

    def __str__(self):
        return f"Permissions for {self.user.username} on {self.task.title}"

class Reminder(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='reminders')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    remind_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Reminder for {self.user.username} on {self.task.title} at {self.remind_at}"
