# Generated by Django 4.0.3 on 2022-03-29 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0002_location_monthlybill_location_nopih_location_states'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='monthlybill',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='location',
            name='nopih',
            field=models.CharField(max_length=2),
        ),
        migrations.AlterField(
            model_name='location',
            name='states',
            field=models.CharField(max_length=30),
        ),
    ]
