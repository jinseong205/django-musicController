from django.urls import path,include
from .views import AuthURL, spotify_callback, IsAuthenticated, CurrentSong, PauseSong, PlaySong

urlpatterns = [
    path('get-auth-url', AuthURL.as_view()),
    path('redirect', spotify_callback),
    path('is-authenticated', IsAuthenticated.as_view()),
    path('current-song',CurrentSong.as_view()),
    path('pause',PauseSong.as_view()),
    path('play',PlaySong.as_view())
    
]
 