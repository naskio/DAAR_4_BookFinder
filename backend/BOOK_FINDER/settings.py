"""
Django settings for BOOK_FINDER project.

Generated by 'django-admin startproject' using Django 3.1.5.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

import os
from pathlib import Path
import environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env(
    DEBUG=(bool, False),
    DOCKER=(bool, False),
    NEO4J_HOST=(str, 'localhost'),
    NEO4J_PORT=(str, '7687'),
    NEO4J_USER=(str, 'neo4j'),
    MONGO_DB=(str, 'BookFinder'),
    MONGO_HOST=(str, 'localhost'),
    MONGO_PORT=(int, 27017),
)
environ.Env.read_env(env_file='.env')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')
# This can be used to toggle between your local env and Docker env
DOCKER = env('DOCKER')

ALLOWED_HOSTS = []
if DEBUG:
    ALLOWED_HOSTS += ['.127.0.0.1', '.localhost', '.10.0.2.2']

# Application definition

INSTALLED_APPS = [
    # 'jet.dashboard',
    # 'jet',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'debug_toolbar',
    'rest_framework',
    'rest_framework.authtoken',
    'drf_yasg',
    'corsheaders',
    # my apps
    'apps.books',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'BOOK_FINDER.urls'

CORS_ORIGIN_ALLOW_ALL = DEBUG
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'DELETE',
    'PUT',
    'PATCH',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates', ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'libraries': {  # work around for admin_static (Django 3.0) for django JET
                'admin_static': 'django.templatetags.static',
            },
        },
    },
]

WSGI_APPLICATION = 'BOOK_FINDER.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': env('MONGO_DB'),
        'ENFORCE_SCHEMA': False,
        'CLIENT': {
            'host': env('MONGO_HOST'),
            'port': env('MONGO_PORT'),
            'username': env('MONGO_USER') or None,
            'password': env('MONGO_PASSWORD') or None,
            # 'authMechanism': 'SCRAM-SHA-1'
            # 'authSource': 'db-name',
        },
        'LOGGING': {
            'version': 1,
            'loggers': {
                'djongo': {
                    'level': 'DEBUG',
                    'propagate': False,
                }
            },
        },
    }
}

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en'

TIME_ZONE = 'Europe/Paris'

USE_I18N = False

USE_L10N = False

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_ROOT = BASE_DIR / "static_files"
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / "static",
]
STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

# Media
MEDIA_ROOT = BASE_DIR / "media"
MEDIA_URL = '/media/'

SECURE_SSL_REDIRECT = not DEBUG

# DRF API
DEFAULT_RENDERER_CLASSES = (
    'rest_framework.renderers.JSONRenderer',
)
if DEBUG:
    DEFAULT_RENDERER_CLASSES = DEFAULT_RENDERER_CLASSES + (
        'rest_framework.renderers.BrowsableAPIRenderer',
    )

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': DEFAULT_RENDERER_CLASSES,
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # 'apps.authentication.drf.BearerAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    # 'DEFAULT_PERMISSION_CLASSES': (
    #     'rest_framework.permissions.IsAuthenticated',
    # ),
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': "[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s",
            'datefmt': "%d/%b/%Y %H:%M:%S"
        },
        'simple': {
            'format': '%(levelname)s %(message)s'
        },
    },
    'handlers': {
        'null': {
            'level': 'DEBUG',
            'class': 'logging.NullHandler',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}

# Documentation
if DEBUG:
    # http://localhost:8000/api/swagger/
    # to run local validation: https://hub.docker.com/r/swaggerapi/swagger-validator/
    SWAGGER_SETTINGS = {
        'VALIDATOR_URL': 'http://localhost:8189',
    }

# Django Debug toolbar => comment to disable debug_toolbar
INTERNAL_IPS = [
    '127.0.0.1',
    'localhost',
    '10.0.2.2',
]

# Django JET
# JET_SIDE_MENU_COMPACT = True
# JET_DEFAULT_THEME = 'default'
# JET_INDEX_DASHBOARD = 'CV_CATCHER.dashboard.CustomIndexDashboard'
# JET_SIDE_MENU_ITEMS = [
#     {
#         'label': "Applications",
#         'app_label': 'cv',
#         'items': [
#             {'label': "Resumes", 'url': '/admin/cv/resume/'},
#             # {'name': 'resume'},
#         ]
#     },
#     {
#         'label': "Users",
#         'items': [
#             {'name': 'auth.user'},
#             {'name': 'auth.group', 'label': "Permission groups"},
#         ]
#     },
# ]

# vars
DATE_FORMAT = 'Y-m-d'
DATETIME_FORMAT = 'Y-m-d H:m:s'

# my custom vars
# books and graph
MAX_BOOKS_NUMBER = 2000
MAX_KEYWORDS_PER_BOOK = 1000
JACCARD_DISTANCE_THETA = 0.5
# auto-correct
SIMILARITY_MIN = 0.5
SIMILARITY_THRESHOLD = 0.85
# results
AUTOCOMPLETE_NUMBER = 10
BOOKS_RESULT_NUMBER = 12
SIMILAR_BOOKS_NUMBER = 6

# neo4j
NEO4J_HOST = env('NEO4J_HOST')
NEO4J_PORT = env('NEO4J_PORT')
NEO4J_USER = env('NEO4J_USER')
NEO4J_PASSWORD = env('NEO4J_PASSWORD')
