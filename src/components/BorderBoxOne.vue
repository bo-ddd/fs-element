<template>
    <div  class="container">
        <div class="content">
            <slot></slot>
            <div class="box-line box-line_tl"></div>
            <div class="box-line box-line_tr"></div>
            <div class="box-line box-line_bl"></div>
            <div class="box-line box-line_br"></div>
        </div>
    </div>
</template>
<script>
export default{
    name:'fs-border-1',
    props:['title'],
    data(){
        return{
        }
    },

}
</script>

<style scoped lang="scss">
.container{
    box-sizing: border-box;
    height: 100%;
    .content{
        border: .6rem #316fb6 solid;
        border-radius: .4rem;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        border-radius: .6rem;
        padding: 3rem;
        .box-line{
            position: absolute;
            width: 4rem;
            height: 2rem;
            border:#7ce7fd .6rem solid;        
        }
        .box-line_tl{
            left: -.6rem;
            top: -.6rem;
            border-radius: .6rem 0;
            border-right: none;
            border-bottom: none;
        }
        .box-line_tr{
            right: -.6rem;
            top: -.6rem;
            border-radius: 0 .6rem;
            border-left: none;
            border-bottom: none;
        }
        .box-line_bl{
            left: -.6rem;
            bottom: -.6rem;
            border-radius: 0 .6rem;
            border-top: none;
            border-right: none;
        }
        .box-line_br{
            right: -.6rem;
            bottom: -.6rem;
            border-radius: .6rem 0;
            border-top: none;
            border-left: none;
        }
    }
}
</style>

