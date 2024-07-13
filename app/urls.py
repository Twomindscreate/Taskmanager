from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, TeamViewSet, MembershipViewSet, TaskViewSet,
    FeedbackViewSet, PermissionViewSet, ReminderViewSet
)
from . import views 

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'memberships', MembershipViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'feedbacks', FeedbackViewSet)
router.register(r'permissions', PermissionViewSet)
router.register(r'reminders', ReminderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', views.home, name='home'),
]
