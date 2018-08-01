<template lang="html">
  <div>
      <logindialog></logindialog>
      <logoutdialog></logoutdialog>
      <importdialog></importdialog>
  </div>
</template>

<script>
import logindialog from './LoginDialog';
import logoutdialog from './LogoutDialog';
import importdialog from './ImportDialog';

export default {
  components: {
    logindialog,
    logoutdialog,
    importdialog,
  },
};
</script>

<style lang="css">
</style>
