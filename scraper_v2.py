import time
from selenium import webdriver

# Create a new instance of the Chrome driver
driver = webdriver.Chrome()


#url
url = "https://www.zillow.com/homes/219-Evans-San-Diego,-CA_rb/"
# Navigate to the website
driver.get(url)


html = driver.page_source
time.sleep(2)
print(html)



# Close the browser
driver.quit()