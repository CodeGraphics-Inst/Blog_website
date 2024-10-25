from django.db import models

# Create your models here.
class Category(models.Model):
    """Model for category"""
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Category'

class Post(models.Model):
    """Model for posts"""
    title = models.CharField(max_length=255)
    image = models.FileField(upload_to='posts', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    details = models.TextField()
    date = models.DateTimeField(auto_now=True)
    views = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Post'