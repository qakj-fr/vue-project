import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Customer from '@/components/customer/Customer'
import Linkman from '@/components/linkman/Linkman'
import UpdatePwd from '@/components/UpdatePwd'
import DetailsCustomer from '@/components/customer/DetailsCustomer'
import AddLinkman from '@/components/linkman/AddLinkman'
import Users from '@/components/user/Users'
import AddCustomer from '@/components/customer/AddCustomer'
import EditCustomer from '@/components/customer/EditCustomer'
import SupplierInfo from '@/components/supplier/SupplierInfo'
import AddSupplierInfo from '@/components/supplier/AddSupplierInfo'
import DetailsSupplierInfo from '@/components/supplier/DetailsSupplierInfo'
import UpdateSupplierInfo from '@/components/supplier/UpdateSupplierInfo'
import CheckCenter from '@/components/supplier/CheckCenter'
import ChannelMGT from '@/components/supplier/ChannelMGT'
import CallMGT from '@/components/supplier/CallMGT'
import CommodityInfo from '@/components/commodity/CommodityInfo'
import PurchaseMGT from '@/components/commodity/PurchaseMGT'
import PurchaseReturn from '@/components/commodity/PurchaseReturn'
import ScheduleMGT from '@/components/work/schedulemgt/ScheduleMGT'
import Addschedulemgt from '@/components/work/schedulemgt/Addschedulemgt'
import AddressList from '@/components/work/addressList/AddressList'
import InsertAddressList from '@/components/work/addressList/InsertAddressList'
import CommunicationMGT from '@/components/work/communicationMGT/CommunicationMGT'
import EditCommunicationMGT from '@/components/work/communicationMGT/EditCommunicationMGT'
import AddCommunicationMGT from '@/components/work/communicationMGT/AddCommunicationMGT'
import Noticeboard from '@/components/work/Noticeboard'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: 'customer',
          name: 'Customer',
          component: Customer
        },
        {
          path: 'linkman',
          name: 'Linkman',
          component: Linkman
        },
        {
          path: 'updatePwd',
          name: 'UpdatePwd',
          component: UpdatePwd
        },
        {
          path: 'detailsCustomer',
          name: 'DetailsCustomer',
          component: DetailsCustomer
        },
        {
          path: 'addLinkman',
          name: 'AddLinkman',
          component: AddLinkman
        },
        {
          path: 'users',
          name: 'Users',
          component: Users
        },
        {
          path: 'addCustomer',
          name: 'AddCustomer',
          component: AddCustomer
        },
        {
          path: 'editCustomer',
          name: 'EditCustomer',
          component: EditCustomer
        },
        {
          path: 'supplierInfo',
          name: 'SupplierInfo',
          component: SupplierInfo
        },
        {
          path: 'checkCenter',
          name: 'CheckCenter',
          component: CheckCenter
        },
        {
          path: 'channelMGT',
          name: 'ChannelMGT',
          component: ChannelMGT
        },
        {
          path: 'callMGT',
          name: 'CallMGT',
          component: CallMGT
        },
        {
          path: 'commodityInfo',
          name: 'CommodityInfo',
          component: CommodityInfo
        },
        {
          path: 'purchaseMGT',
          name: 'PurchaseMGT',
          component: PurchaseMGT
        },
        {
          path: 'purchaseReturn',
          name: 'PurchaseReturn',
          component: PurchaseReturn
        },
        {
          path: 'scheduleMGT',
          name: 'ScheduleMGT',
          component: ScheduleMGT
        },
        {
          path: 'addschedulemgt',
          name: 'Addschedulemgt',
          component: Addschedulemgt
        },
        {
          path: 'addressList',
          name: 'AddressList',
          component: AddressList
        },
        {
          path: 'insertAddressList',
          name: 'InsertAddressList',
          component: InsertAddressList
        },
        {
          path: 'communicationMGT',
          name: 'CommunicationMGT',
          component: CommunicationMGT
        },
         {
          path: 'editCommunicationMGT',
          name: 'EditCommunicationMGT',
          component: EditCommunicationMGT
        },
         {
          path: 'addCommunicationMGT',
          name: 'AddCommunicationMGT',
          component: AddCommunicationMGT
        },
        {
          path: 'noticeboard',
          name: 'Noticeboard',
          component: Noticeboard
        },
        {
          path: 'addSupplierInfo',
          name: 'AddSupplierInfo',
          component: AddSupplierInfo
        },
        {
          path: 'detailsSupplierInfo',
          name: 'DetailsSupplierInfo',
          component: DetailsSupplierInfo
        },
        {
          path: 'updateSupplierInfo',
          name: 'UpdateSupplierInfo',
          component: UpdateSupplierInfo
        },
      ]
    }
  ]
})
