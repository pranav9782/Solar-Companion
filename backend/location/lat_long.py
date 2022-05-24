from geopy.location import Location
from geopy.geocoders import Nominatim
import datetime 
import matplotlib.pyplot as plt
import pysolar
#Main Function
def location1():
    loc1=input("Enter address:")
    bill = int(input("enter bill:"))
    nopih = input("Enter no of people in house:")
    states=input("State:")
    geolocator = Nominatim(user_agent="my_request")
    location = geolocator.geocode(loc1)
    print((location.latitude, location.longitude))

    #date
    y=datetime.datetime.today().year
    m=datetime.datetime.today().month
    d=datetime.datetime.today().day

    #Solar Radiation calculation and visulization
    lat = location.latitude
    lon = location.longitude

    print("Latitude: {}, Longitude: {}".format(lat,lon))

    timezone = datetime.timezone(datetime.timedelta(hours=5.30))
    startdate = datetime.datetime(y,m,d,tzinfo=timezone)
    numberofhr = 24*90
    dates, altitudes_deg, radiations = list(), list(), list()
    for i in range(numberofhr):
        date = startdate + datetime.timedelta(hours=i)
        altitude_deg = pysolar.solar.get_altitude(lat,lon,date)
        if altitude_deg <= 0:
            radiation = 0.
        else:
            radiation = pysolar.radiation.get_radiation_direct(date,altitude_deg)
        dates.append(date)
        altitudes_deg.append(altitude_deg)
        radiations.append(radiation)

    days = [ihr/24 for ihr in range(numberofhr)]

    unit = bill/7.8
    kw = unit/100
    finalkw = "{:.2f}".format(kw)
    print("{} KW System REC Panels & Enphase Microinverter ".format(finalkw))

    #Figure1
    plt.figure()
    fig, ax = plt.subplots()
    plt.plot(days,radiations)
    plt.title('Solar Irradiance in W/m2(watts per square meter)')
    plt.xlabel('Days')
    plt.ylabel('Solar Irradiance')
    # plt.show()
    fig.savefig('my_plot1.png')

    #Figure2
    plt.figure()
    fig, ax = plt.subplots()
    plt.plot(days,altitudes_deg)
    plt.title('Sun Altitude in Degree')
    plt.xlabel('Days')
    plt.ylabel('Altitude in Degree')
    # plt.show()
    fig.savefig('my_plot2.png')

try:
  location1()

except:
  print("Address is not accepting, please enter again. ")