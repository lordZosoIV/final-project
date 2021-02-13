from bing_image_downloader import downloader
import re

if __name__ == '__main__':
    file1 = open('playersData.txt', 'r')
    Lines = file1.readlines()

    for line in Lines:
        query = line.strip()
        response = downloader.download(query, limit=1, output_dir='players',
                                       adult_filter_off=True, force_replace=False, timeout=10)
