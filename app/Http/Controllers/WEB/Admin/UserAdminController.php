<?php

namespace App\Http\Controllers\WEB\Admin;

use App\Services\RoleService;
use Illuminate\Http\Request;
use App\Entities\User;
use App\Http\Controllers\BaseController as BaseController;
use App\Services\UserService;

class UserAdminController extends BaseController
{
    protected $userService;
    protected $roleService;

    public function __construct()
    {
        $this->userService = app(UserService::class);
        $this->roleService = app(RoleService::class);
    }

    public function index()
    {
        $roleAndUser = $this->roleService->getAllRoleAndUser();
        foreach ($roleAndUser as $value) {
            $roleOfUser[$value->user_id][$value->role_id] = $value;
        }
        $allRole = $this->roleService->getAll();
        $users = $this->userService->getUserListForAdminView();
        return view('admin.user.user-list', ['users' => $users, 'allRole' => $allRole, 'roleOfUser' => $roleOfUser]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }


    public function show(User $user)
    {
        //
    }

    public function edit(User $user)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $checked = $request->input('checked');
        $idRole = $request->input('idRole');
        if ($checked == 0) {
            $result = $this->userService->removeRole($id, $idRole);
            return $this->responseAdmin($result);
        }

        if ($checked == 1) {
            $result = $this->userService->addRole($id, $idRole);
            return $this->responseAdmin($result);
        }
    }

    public function destroy($id)
    {
        if ($id) {
            $user = $this->userService->delete($id);
            $result = true;
        } else {
            $result = null;
        }
        return $this->responseAdmin($result);
    }
}
