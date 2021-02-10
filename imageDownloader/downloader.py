from bing_image_downloader import downloader
import re

if __name__ == '__main__':
    file1 = open('playersData.txt', 'r')
    Lines = file1.readlines()

    for line in Lines:
        query = line.strip()
        words = re.findall(r'\S+', query)
        if not words[0].isalpha() or (len(words) > 1 and not words[1].isalpha()):
            print("                   banned                                                              " + query)
        else:
            print("                                                                                 " + query)
            response = downloader.download(query, limit=1, output_dir='players',
                                           adult_filter_off=True, force_replace=False, timeout=10)