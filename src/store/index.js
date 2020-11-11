import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
	state: {
		currentUserId: '',
		users: [
			{name: 'Иван Иванов', id: 'abc', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
		],
		chat: [
			{
				text: 'Привет!',
				date: Date.now(),
				userId: 'abc'
			}, {
				text: 'Как дела?',
				date: Date.now(),
				userId: 'abc'
			}
		]
	},
	getters: {
		users: state => state.users,
		currentUserId: state => state.currentUserId,
		chat: state => state.chat
	},
	mutations: {
		ADD_USER(state, userdata) {
			state.users.push(userdata);
			state.currentUserId = userdata.id;
		},
		SET_SELECTED_USER_ID(state, id) {
			state.selectedUserId = id;
		},
		ADD_MESSAGE(state, data) {
			state.chat.push({
				text: data.text,
				userId: data.userId,
				date: Date.now()
			});
		}
	},
	actions: {
		registerUser({commit}, userdata) {
			commit('ADD_USER', userdata);
		},
		sendMessage({commit}, message) {
			commit('ADD_MESSAGE', message);
		}
	},
});
