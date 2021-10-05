export default {
	state: {
		posts: null
	},
	actions: {
		async fetchPosts(ctx) {
			const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
			const data = await resp.json()
			data.map(post => post.isFavorite = false)
			ctx.commit('uploadPosts', data)
		},
		addToFavorites(ctx, post_id) {
			ctx.commit('togglePost', post_id)
		}
	},
	mutations: {
		uploadPosts(state, posts) {
			state.posts = posts
		},
		addNewPost(state, newPost) {
			state.posts.unshift(newPost)
		},
		togglePost(state, post_id) {
			if (state.posts) {
				state.posts.map(post => (post.id === post_id) ? (post.isFavorite = !post.isFavorite) : post)
			}
		}
	},
	getters: {
		allPosts(state) {
			return state.posts
		},
		favoritePosts(state) {
			if (state.posts) {
				return state.posts.filter(post => post.isFavorite)
			}
		}
	},
}