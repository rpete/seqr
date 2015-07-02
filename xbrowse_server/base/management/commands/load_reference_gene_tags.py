from django.conf import settings
from django.core.management import BaseCommand
from xbrowse_server import mall
from xbrowse_server.mall import get_reference
from xbrowse_server.xbrowse_annotation_controls import CustomAnnotator
import annotator_settings

"""Load 'gene tags' like the contraint scores"""
class Command(BaseCommand):

    def handle(self, *args, **options):
        population_frequency_store = mall.get_reference()._load_tags()

