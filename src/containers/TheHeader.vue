<template>
	<header class="header">
		<router-link to="profile" class="mobile-logo">
			<img src="@/assets/img/logo.svg" alt=""
		/></router-link>
		<div class="user-short ml-auto">
			<router-link to="profile" class="user-short__icon">
				<img src="@/assets/img/user-img.jpg" alt="" />
			</router-link>
			<div class="user-short__content">
				<router-link to="profile">Mike Smith</router-link>
			</div>
			<div class="user-short__drop">
				<ul>
					<li><router-link to="login">Log out</router-link></li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'TheHeader',
};
</script>

<style scoped></style>
