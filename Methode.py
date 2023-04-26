import pandas as pd
import numpy as np

class Portfolio:
    '''This class represents a portfolio of stocks and starts with
    a path you need to provide in your repository.'''
    path = input("Please provide the path to your repository: ")
    def __init__(self, date):
        self.date = date
        self.stocks = pd.read_csv(Portfolio.path)

    def get_stocks(self):
        return self.stocks
    
    def get_date(self):
        return self.date
    
    

