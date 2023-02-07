# the purpose of this module is to scrape house data from zillow. 
# this module will have a function that looks for a specific house based on 
# the street, city, state, and zip code.  It will then record the current listed zillow price, of that house 




import requests
from bs4 import BeautifulSoup
import pprint
import json


def scrape_website(website):
    """
    This function will scrape the website and return the current listed price of the house
    """


    
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "json",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-origin",
        "Te": "trailers"
    }

    # get the website
    response = requests.get(website,headers, allow_redirects=True)
    soup = BeautifulSoup(response.content, 'html.parser')
    print(soup.prettify())
    # find the price of the house
    price = soup.find('div', class_='ds-home-details-chip').find('span', class_='ds-value').text

    return price


if __name__ == "__main__":
    website = "https://www.zillow.com/homes/219-Evans-San-Diego,-CA_rb/"
    print(scrape_website(website))