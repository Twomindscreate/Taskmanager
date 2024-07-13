from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Team, Membership, Task, Feedback, Permission, Reminder

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'description', 'created_at']

class MembershipSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    team = TeamSerializer()

    class Meta:
        model = Membership
        fields = ['id', 'user', 'team', 'date_joined', 'is_admin']

class TaskSerializer(serializers.ModelSerializer):
    assigned_to = UserSerializer()
    team = TeamSerializer()

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'assigned_to', 'team', 'status', 'created_at', 'due_date', 'updated_at', 'original_task']

class FeedbackSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    task = TaskSerializer()

    class Meta:
        model = Feedback
        fields = ['id', 'task', 'user', 'comment', 'created_at']

class PermissionSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    task = TaskSerializer()

    class Meta:
        model = Permission
        fields = ['id', 'user', 'task', 'can_create', 'can_read', 'can_update', 'can_delete']

class ReminderSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    task = TaskSerializer()

    class Meta:
        model = Reminder
        fields = ['id', 'task', 'user', 'remind_at', 'created_at']
