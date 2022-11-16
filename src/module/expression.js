// 自然语言表达
export default [
    {
        exp:/^(\S+?)(应该|得)?(称呼|叫|喊)(什么|啥)？?$/,
        opt:match=>({
            text:match[1]
        })
    },
    {
        exp:/^(\S+?)(应该|得)?(如何|怎么)(称呼|叫|喊)？?$/,
        opt:match=>({
            text:match[1]
        })
    },
    {
        exp:/^(\S+?)是(谁|什么|什么亲戚|啥亲戚|什么人|什么辈分|啥辈分)？?$/,
        opt:match=>({
            text:match[1],
            type:match[1].indexOf('的')>-1?'default':'chain'
        })
    },
    {
        exp:/^(\S+?)(应该|得)?(称呼|叫|喊)(\S+?)(什么|啥)？?$/,
        opt:match=>({
            text:match[4],
            target:match[1]
        })
    },
    {
        exp:/^(\S+?)(应该|得)?(如何|怎么)(称呼|叫|喊)(\S+?)？?$/,
        opt:match=>({
            text:match[5],
            target:match[1]
        })
    },
    {
        exp:/^(\S+?)是(\S+?)的(谁|什么|什么亲戚|啥亲戚|什么人)？?$/,
        opt:match=>({
            text:match[1],
            target:match[2],
            type:match[1].indexOf('的')>-1?'default':'chain'
        })
    },
    {
        exp:/^(\S+?)(应该|得)?管(\S+?)叫(什么|啥)？?$/,
        opt:match=>({
            text:match[2],
            target:match[1]
        })
    },
    {
        exp:/^(\S+?)(和|与)(\S+?)(之间)?是(什么|啥)关系？?$/,
        opt:match=>({
            text:match[1],
            target:match[3],
            type:'pair'
        })
    },
    {
        exp:/^(\S+?)(指的)?是(什么|啥)(意思|关系|辈分|人)？?$/,
        opt:match=>({
            text:match[1],
            type:'chain'
        })
    },
    {
        exp:/^(\S+?)(指的)?是(什么|啥)亲戚关系？?$/,
        opt:match=>({
            text:match[1],
            type:'chain'
        })
    },
    {
        exp:/^(\S+?)对于(\S+?)是(什么|啥)关系？?$/,
        opt:match=>({
            text:match[1],
            target:match[2],
            type:'chain'
        })
    },
];