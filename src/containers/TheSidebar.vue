<template>
	<div class="sidebar">
		<div class="sidebar__content">
			<router-link to="/" class="logo"
				><img src="@/assets/img/logo.svg" alt=""
			/></router-link>
			<nav class="sidebar__nav">
				<ul>
					<li :class="this.$route.name === 'Dashboard' ? 'active' : ''">
						<router-link to="dashboard"
							><img
								src="@/assets/img/menu-dashboard.svg"
								alt=""
							/>Dashboard</router-link
						>
					</li>
					<li :class="this.$route.name === 'Send' ? 'active' : ''">
						<router-link to="send"
							><img
								src="@/assets/img/menu-wallet.svg"
								alt=""
							/>Send</router-link
						>
					</li>
					<li :class="this.$route.name === 'Profile' ? 'active' : ''">
						<router-link to="profile" @click="actual = 'Profile'">
							<img src="@/assets/img/menu-setting.svg" alt="" />Profile
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheSidebar',
};
</script>

<style scoped></style>
