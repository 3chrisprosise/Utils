# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-07-09 05:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('All_utile', '0004_auto_20170709_1333'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article1',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('headline', models.CharField(max_length=100)),
                ('publications', models.ManyToManyField(to='All_utile.Publication')),
            ],
        ),
        migrations.RemoveField(
            model_name='article_1',
            name='publications',
        ),
        migrations.DeleteModel(
            name='Article_1',
        ),
    ]
