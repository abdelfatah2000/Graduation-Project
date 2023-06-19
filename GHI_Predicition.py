import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

#Read Data
df = pd.read_csv("content/Alexandria_weather_data.csv")

# Dropping  Columns
df = df.drop(["Year","DHI", "Clearsky DHI", "Clearsky DNI", "Clearsky GHI", "DNI", "Fill Flag", "Dew Point","Date", "Time"], axis = 1)
     
#Make GHI as an OUTPUT and other data FEATURES 
features = df.iloc[:, :-1]
output = df.iloc[:, -1]

# Split the data frame to day data and night data
df_day = df[df.is_day == 1].drop('is_day', axis=1)
df_night = df[df.is_day == 0].drop('is_day', axis=1)

# Day data
features_day = df_day.iloc[:, :-1]
output_day = df_day.iloc[:, -1]

#Night data
features_night = df_night.iloc[:, :-1]
output_night = df_night.iloc[:, -1]


#Split Data into train and test
X_train, X_test, y_train, y_test = train_test_split(features, output, test_size=.2, random_state=0)
day_X_train, day_X_test, day_y_train, day_y_test = train_test_split(features_day, output_day, test_size=.2, random_state=0)
night_X_train, night_X_test, night_y_train, night_y_test = train_test_split(features_night, output_night, test_size=.2, random_state=0)

# insitiate object from random forest for the day and the night
RandomForset_day_data = RandomForestRegressor(n_estimators = 1000, random_state = 42)
RandomForset_night_data = RandomForestRegressor(n_estimators = 1000, random_state = 42)

#fit the model 
def Fitting():
    #Fitting the day model
    RandomForset_day_data.fit(day_X_train.values, day_y_train.values)
    #Fitting the night model
    RandomForset_night_data.fit(day_X_train.values, day_y_train.values)

Fitting()

# Power function
def Calculate_Power(area,efficiency ,radiation):
    power = area*efficiency*radiation
    return power

# API Handler 
def API_handler (Month,Day,Hour,Minute, Temperature, Cloud_Type, Ozone, Relative_Humidity, Solar_Zenith_Angle, Surface_Albedo, Pressure, Precipitable_Water, Wind_Direction, Wind_Speed, is_day,area,efficiency ):
    X_test = [Month, Day,Hour,Minute, Temperature, Cloud_Type, Ozone, Relative_Humidity, Solar_Zenith_Angle, Surface_Albedo, Pressure, Precipitable_Water, Wind_Direction, Wind_Speed]
    if is_day == 1 :
        #Predict from day data
        y = RandomForset_day_data.predict([X_test])
    else:
        #Predict from night data
        y = RandomForset_night_data.predict([X_test])

    # Calculating DC Power
    power = Calculate_Power(area,efficiency, y  )
    return power
    
# Apply of API Handler 
y = API_handler(1,1,0,0,12.5,3,0.281,72.35,152.94,0.16,1016,1.5,201,2.2,0,1.6,250)

#Printing the power 
print("Power = {} WP".format(y)) # power = 0

