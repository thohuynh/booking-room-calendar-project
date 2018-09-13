<?php

namespace App\Http\Controllers\WEB\Admin;

use Illuminate\Http\Request;
use App\Entities\Role;
use App\Services\RoleService;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\RoleAdmin;
use App\Http\Controllers\BaseController as BaseController;

class RoleAdminController extends BaseController
{
    protected $roleService;

    public function __construct()
    {
        $this->roleService = app(RoleService::class);
    }

    public function index()
    {
        $roles = $this->roleService->getAll();
        return view('admin.role.role-list', compact('roles', $roles));
    }

    public function create()
    {
        return view('admin.role.create-role');
    }

    public function store(RoleAdmin $request)
    {
        try {
            $name = $request->input('nameCreateRole');
            $displayName = $request->input('disNameCreateRole');
            $description = $request->input('desCreateRole');

            $role = $this->roleService->create($name, $displayName, $description);
            session()->flash('mess-success', 'success');

            return back();
        } catch (Exception $e) {
            session()->flash('mess-error', 'There was an error !!!');
            Log::error($e->getMessage());
        }
    }

    public function show(Role $role)
    {
        //
    }

    public function edit(Role $role)
    {
        //
    }

    public function update(RoleAdmin $request, $id)
    {
        try {
            $idRole = $id;
            $name = $request->input('name');
            $displayName = $request->input('displayName');
            $description = $request->input('description');
            $role = $this->roleService->update($id, $name, $displayName, $description);
            return $this->responseAdmin($role);
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }

    public function destroy($id)
    {
        if ($id) {
            $role = $this->roleService->delete($id);
            $result = true;
        } else {
            $result = null;
        }
        return $this->responseAdmin($result);
    }
}
