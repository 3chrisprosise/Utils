# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import admin
# Create your models here.
class Reporter(models.Model):
    Full_name = models.CharField(max_length=70)
    def __str__(self):
        return self.Full_name

class Article(models.Model):
    pub_date = models.DateField()
    headline = models.CharField(max_length=200)
    content = models.TextField()
    reporter = models.ForeignKey(Reporter)
    def __str__(self):
        return self.headline


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

admin.site.register(Article)
admin.site.register(Reporter)
admin.site.register(Choice)
admin.site.register(Question)