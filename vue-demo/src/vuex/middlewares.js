/**
 * Created by jerry on 16/9/29.
 */
import createLogger from 'vuex/logger'

export default process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []