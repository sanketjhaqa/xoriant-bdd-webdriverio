import { $ } from '@wdio/globals'


class DashboardPage
{
    get product(){
       return $('//android.widget.TextView[@text="PRODUCTS"]')
    }
}

export default new DashboardPage()