/**
 * Created by jerry on 16/9/27.
 */
export default {
    bind () {

    },
    update () {
        this.el.innerHTML = new Date();
        this.timeout = setInterval(() => {
            this.el.innerHTML = new Date();
        })
    },
    unbind () {
        clearInterval(this.timeout);
    }
};