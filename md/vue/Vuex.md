# Vuex

全局变量传值

#### 取值 State



````
// 1、方式一
this.$store.state.xxx

// 2、方式二
<div>{{xxx}}</div>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState(['xxx'])
	}
}
````

#### 修改 Mutation

````
// 1、方式一
mutations: {
	add(state) {
		state.xxx++
	}
}
this.$store.commit('add')
// 传参
mutations: {
	addN(state, step) {
		state.xxx += n
	}
}
this.$store.commit('addN', 10)

// 2、方式二
mutations: {
	sub(state) {
		state.xxx--
	},
	subN(state, step) {
		state.xxx -= step
	}
}
import { mapMutations } from 'vuex'
export default {
	methods: {
		...mapMutations(['sub'],['subN']),
		fun() {
			this.sub(),
			this.subN(n)
		}
	}
}
<button @click="fun"></button>
// 或
<button @click="sub"></button>
<button @click="subN(n)"></button>
````

> 只能通过mutation变量 Store 数据，不可以直接操作 Store 中的数据

#### 异步 Action

````
// 方式一 定义
mutations: {
	add(state) {
		state.count++
	}
},
actions: {
  // 在 actions 中，不能直接修改 state 中的数据
  // 必须通过 context.commit() 触发某个 mutation 才行
	addAsync(context) {
		setTimeout(() => {
			context.commit('add')
		}, 1000)
	}
}
// 触发 Action
methods: {
	handle() {
	  // 这里的 dispatch 函数，专门用来触发 action
		this.$store.dispatch('addAsync')
	}
}
// 传参
addAsync(context, step) {
	setTimeout(() => {
		context.commit('add', step)
	}, 1000)
}
this.$store.dispatch('addAsync', 5)

// 方式二
actions: {
  subAsync(context) {
  	setTimeout(() => {
  		context.commit('sub')
  	}, 1000)
  }
}
import { mapActions } from 'vuex'
methods: {
	...mapActions(['subAsync'])
}
<button @click="subAsync">Async</button>
````

#### 加工数据 Getter

````
// 方式一
this.$store.getters.名称

// 方式二
import { mapGetters } from 'vuex'
computed: {
	...mapGetters(['showNum'])
}
{{showNum}}
````

