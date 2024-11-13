1. Install Node.js

2. Install NPX

3. Install Android Studio

4. Activate Android device with the configuration below it is used in project

5.  'appium:platformName': 'Android',
    'appium:deviceName': 'Pixel_8_Pro',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2',

6. Install Xcode and open IOS device with configuration below it is used in project
   'appium:platformName': 'ios',
   'appium:deviceName': 'iPhone 15 Pro',
   'appium:platformVersion': '17.2',
   'appium:automationName': 'xcuitest',

7.Project having config folder containing wdio.android.conf.js and wdio.ios.conf.js
   containing all required android and ios configuration modifiy them according to your need.

8. Project structure
    app -->> containg apps under test both for android as well ios
    config -->> containing configuration files for ios and android which will execute later
    feature
       1.-->> pageObjects-->>containing page object classes 
       2.-->>> step-definitions--->> containing step definition file
       3. *.feature -->> feature files
    htmlReport -->> containing index.html which user can open to see the html report along with screenshot
    jsonFiles--->> it is containing json files which containing details of cucumber features.
9. take a pull into the system above mentioned node.js and java, android studio and xcode are already install and env path has been set
10. in the parent folder open terminal and execute command 'npn install'
11. if you want to run on android device open device in simulator and then execute 'npx wdio config/wdio.android.conf.js'
12. if you want to run on ios device open device in simulator and then execute 'npx wdio config/wdio.ios.conf.js'
13. before executing any of the above config files mentioned in 11 and 12th step please configure the capabilities in respective files.
14. open 'htmlReport' folder and index.html to get the report.
    
    
