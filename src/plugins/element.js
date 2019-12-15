import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Row,
  Col,
  Input,
  Message,
  CollapseTransition,
} from 'element-ui'

import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.prototype.$message = Message
// Vue.prototype.$confirm = MessageBox.confirm
