from django.contrib import admin
from .models import Team, Membership, Task, Feedback, Permission, Reminder

class MembershipInline(admin.TabularInline):
    model = Membership
    extra = 1

class TaskInline(admin.TabularInline):
    model = Task
    extra = 1

class FeedbackInline(admin.TabularInline):
    model = Feedback
    extra = 1

class PermissionInline(admin.TabularInline):
    model = Permission
    extra = 1

class ReminderInline(admin.TabularInline):
    model = Reminder
    extra = 1

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at')
    inlines = [MembershipInline, TaskInline]

@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    list_display = ('user', 'team', 'date_joined', 'is_admin')

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'assigned_to', 'team', 'status', 'created_at', 'due_date', 'updated_at', 'original_task')
    list_filter = ('status', 'team', 'assigned_to')
    search_fields = ('title', 'description')
    inlines = [FeedbackInline, PermissionInline, ReminderInline]

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('task', 'user', 'comment', 'created_at')
    list_filter = ('task', 'user')
    search_fields = ('comment',)

@admin.register(Permission)
class PermissionAdmin(admin.ModelAdmin):
    list_display = ('user', 'task', 'can_create', 'can_read', 'can_update', 'can_delete')
    list_filter = ('task', 'user')
    search_fields = ('task__title', 'user__username')

@admin.register(Reminder)
class ReminderAdmin(admin.ModelAdmin):
    list_display = ('task', 'user', 'remind_at', 'created_at')
    list_filter = ('task', 'user', 'remind_at')
    search_fields = ('task__title', 'user__username')
