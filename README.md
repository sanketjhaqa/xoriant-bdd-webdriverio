## **Basic Setup**
1. Install Node.js
2. Install NPX
3. Install Android Studio
4. Install Xcode

## **PROJECT STRUCTURE**
### Folders
**app** -->> containg apps under test both for android as well ios

**config** -->> containing configuration files for ios and android which will execute later

**feature**
   
   |-> **pageObjects** -->>containing page object classes 
   
   |->  **step-definitions** --->> containing step definition file
    
   |->  **feature** -->> feature files
    
**htmlReport** -->> containing index.html which user can open to see the html report along with screenshots
    
**jsonFiles** --->> it is containing json files which containing details of cucumber features.



### CAPABILITIES FOR ANDROID AND IOS DEVICES

## **ANDROID**
    'appium:platformName': 'Android',
    'appium:deviceName': 'Pixel_8_Pro',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2'

## **IOS**
    'appium:platformName': 'ios',
    'appium:deviceName': 'iPhone 15 Pr',
    'appium:platformVersion': '17.2',
    'appium:automationName': 'xcuitest',
    

## **6.HOW TO RUN TEST CASES**

### **STEPS TO SETUP UP**
 
> 1. take a pull into the system in which above mentioned node.js and java, android studio and xcode are already install and env path has been set.
> 2. in the parent folder open terminal and execute command 'npn install'
> 3. if you want to run on android device open device in emulator and then execute 'npm run androidTests'
> 4. if you want to run on ios device open device in simulator and then execute 'npm run iosTests'
> 5. open 'htmlReport' folder and index.html to get the report.


### **FOR IOS**
> npm run iosTests

### **FOR ANDROID**
>npm run androidTests



## REPORT PREVIEW

### DASHBOARD
![image](https://github.com/user-attachments/assets/86b75d37-0359-4011-955b-3fc8702b4a85)

### SCENARIO DETAILS
![image](https://github.com/user-attachments/assets/7f122910-7dc1-4a27-ad62-b0d330f8a119)



    
