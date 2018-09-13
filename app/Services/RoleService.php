<?php

namespace App\Services;

use App\Repositories\Role\RoleRepository;
use Illuminate\Support\Facades\DB;

class RoleService extends BaseService
{
    protected $roleRepo;

    public function __construct()
    {
        $this->roleRepo = app(RoleRepository::class);
    }

    public function getAll()
    {
        return $this->roleRepo->all();
    }

    public function getAllRoleAndUser()
    {
        $roleAndUser = DB::table('role_user')->get();
        return $roleAndUser;
    }

    public function getRoleOfUser()
    {
        return $this->roleRepo->all();
    }

    public function create($name, $displayName, $description)
    {
        $attributes = [
            'name' => $name,
            'display_name' => $displayName,
            'description' => $description,
        ];

        return $this->roleRepo->create($attributes);
    }

    public function update($id, $name, $displayName, $description)
    {
        $where = [
            ['id', '=', $id]
        ];
        $attributes = [
            'name' => $name,
            'display_name' => $displayName,
            'description' => $description,
        ];
        return $this->roleRepo->updateWhere($attributes, $where);
    }

    public function delete($id)
    {
        $where = [
            ['id', '=', $id],
        ];
        $this->roleRepo->deleteWhere($where);
    }
}
