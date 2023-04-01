<template>
        <div class="border-blue">
            <div class="horn horn-top">
                <div class="horn-content">
                    <div class="top-border"> </div>
                    <div class="left-border"> </div>
                    <div class="bottom-border"> </div>
                </div>
            </div>
            <div class="horn horn-left">
                <div class="horn-content">
                    <div class="top-border"></div>
                    <div class="left-border"></div>
                    <div class="bottom-border"></div>
                </div>
            </div>
            <div class="horn horn-bottom">
                <div class="horn-content">
                    <div class="top-border"></div>
                    <div class="left-border"></div>
                    <div class="bottom-border"></div>
                </div>
            </div>
            <div class="horn horn-right">
                <div class="horn-content">
                    <div class="top-border"></div>
                    <div class="left-border"></div>
                    <div class="bottom-border"></div>
                </div>
            </div>
            <slot></slot>
        </div>
</template>

<script>
export default {
    name:'fs-border-4',
    props: [],
    data: function () {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .border-blue {
        height: calc(100% - 0.1rem);
        box-shadow: inset 0px 0px 20px 10px #223c85;
        border-radius:1rem ;
        position: relative;
        box-sizing: border-box;
        padding:3rem;
        min-height:7rem;
        min-width: 13rem;
        font-size: 3rem;
        color: aqua;
        .horn-top {
            position: absolute;
            left: 0;
            top: 0;
        }

        .horn-left {
            position: absolute;
            right: 0;
            top: 0;
            transform: rotateY(180deg);
        }

        .horn-bottom {
            position: absolute;
            right: 0;
            bottom: 0;
            transform: rotateX(180deg);
            transform: rotate(180deg);

        }

        .horn-right {
            position: absolute;
            left: 0;
            bottom: 0;
            transform: rotateX(180deg);
        }

        .horn {
            .horn-content {
                position: relative;
                .top-border {
                    width: 5rem;
                    border-top: 0.4rem solid #d3e1f8;
                    border-right: 0.4rem solid transparent;
                    position: absolute;
                    z-index: 10;
                    left: 0.6rem;
                }
                .left-border {
                    width: 1rem;
                    border-top: 0.4rem solid #d3e1f8;
                    position: absolute;
                    z-index: 10;
                    top: 0.2rem;
                    transform: rotate(-45deg);
                    border-radius: 0 0.7rem 0 0;
                }

                .bottom-border {
                    height: 1.8rem;
                    border-left: 0.4rem solid #d3e1f8;
                    border-bottom: 0.4rem solid transparent;
                    position: absolute;
                    z-index: 10;
                    top: 0.6rem;

                }
            }
        }

    }



</style>