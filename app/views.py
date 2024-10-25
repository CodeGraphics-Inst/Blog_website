from django.shortcuts import render, HttpResponse, get_object_or_404
from . import models

# Create your views here.

def index(request):
    posts = models.Post.objects.all()
    return render(request, 'app/index.html', {'posts': posts})


def blog(request, id):
    post = get_object_or_404(models.Post, id=id)
    post.views += 1
    post.save()
    return render(request, 'app/blog.html', {'post': post})
