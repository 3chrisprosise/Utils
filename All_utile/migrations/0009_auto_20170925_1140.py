# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-25 03:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('All_utile', '0008_auto_20170925_1136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='date',
            name='Date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='date',
            name='DateTime',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='date',
            name='Time',
            field=models.TimeField(auto_now_add=True, null=True),
        ),
    ]