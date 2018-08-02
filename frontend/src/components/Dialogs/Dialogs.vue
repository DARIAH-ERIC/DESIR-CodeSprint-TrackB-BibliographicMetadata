<template lang="html">
  <div>
      <logindialog></logindialog>
      <logoutdialog></logoutdialog>
      <importdialog></importdialog>
      <editdialog></editdialog>
  </div>
</template>

<script>
import logindialog from './LoginDialog';
import logoutdialog from './LogoutDialog';
import importdialog from './ImportDialog';
import editdialog from './EditDialog';

export default {
  components: {
    logindialog,
    logoutdialog,
    importdialog,
    editdialog,
  },
};
</script>

<style lang="css">
</style>
