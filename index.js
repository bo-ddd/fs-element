import BorderBoxOne from './src/components/BorderBoxOne.vue'
import BorderBoxTwo from './src/components/BorderBoxTwo.vue'
import BorderBoxThree from './src/components/BorderBoxThree.vue'
import BorderBoxFour from './src/components/BorderBoxFour.vue'
const  components=[BorderBoxOne,BorderBoxTwo,BorderBoxThree,BorderBoxFour]
export const BorderBoxOnePlugin = {
    install: function (app) {
        app.component(BorderBoxOne.name, BorderBoxOne)
    }
}
export const BorderBoxTwoPlugin = {
    install: function (app) {
        app.component(BorderBoxTwo.name, BorderBoxTwo)
    }
}
export const BorderBoxThreePlugin = {
    install: function (app) {
        app.component(BorderBoxThree.name, BorderBoxThree)
    }
}
export const BorderBoxFourPlugin = {
    install: function (app) {
        app.component(BorderBoxFour.name, BorderBoxFour)
    }
}
export default{
    install:(app)=>{
        components.forEach((item=>{
            app.component(item.name,item)
        }))
    }
}
