from rest_framework import viewsets
from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Team, Membership, Task, Feedback, Permission, Reminder
from .serializers import (
    UserSerializer, TeamSerializer, MembershipSerializer, TaskSerializer,
    FeedbackSerializer, PermissionSerializer, ReminderSerializer
)


def home(request):
    return render(request, 'home.html')


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.all()
    serializer_class = MembershipSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    @action(detail=True, methods=['post'])
    def reschedule(self, request, pk=None):
        task = self.get_object()
        new_due_date = request.data.get('due_date')
        rescheduled_task = task.reschedule(new_due_date)
        if rescheduled_task:
            serializer = self.get_serializer(rescheduled_task)
            return Response(serializer.data)
        return Response({"detail": "Task not rescheduled."}, status=400)

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer

class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
