import {observable, computed} from 'mobx'
import React, {useRef, useState} from 'react'
import {useLocalStore} from 'mobx-react'

const PageState = () => {
    const simpleState = useRef(observable.array([1, 2, 3])).current
    const [bigState] = useState(1)
    const localState = useLocalStore(() => ({
        count: 0,
        inc() {
            localState.count += 1
        },
    }))
    return <div simple={simpleState} big={bigState} local={localState} />
}
export default PageState
