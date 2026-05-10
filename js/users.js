(function () {
  function ensureUsers() {
    const usersKey = window.RecycleStorage.KEYS.users;
    const currentUserKey = window.RecycleStorage.KEYS.currentUser;

    let users = window.RecycleStorage.readJson(usersKey, []);
    if (!Array.isArray(users) || !users.length) {
      users = [{
        user_id: 'local_owner',
        user_name: 'Local Owner',
        role: 'admin',
        created_at: window.RecycleUtils.nowIso(),
        updated_at: window.RecycleUtils.nowIso()
      }];
      window.RecycleStorage.writeJson(usersKey, users);
    }

    let current = window.RecycleStorage.readJson(currentUserKey, null);
    if (!current?.user_id) {
      current = { user_id: users[0].user_id, user_name: users[0].user_name, role: users[0].role };
      window.RecycleStorage.writeJson(currentUserKey, current);
    }
    return { users, current };
  }

  function getCurrentUser() {
    return ensureUsers().current;
  }

  window.RecycleUsers = {
    ensureUsers,
    getCurrentUser
  };
})();
