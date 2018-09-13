<?php

namespace App\Services;

use App\Repositories\User\UserRepository;
use App\Services\SlackService;
use App\Entities\User;

class UserService extends BaseService
{
    protected $userRepo;
    protected $slackService;

    public function __construct()
    {
        $this->userRepo = app(UserRepository::class);
        $this->slackService = app(SlackService::class);
    }

    public function findOrCreateUserSlack($slackUser)
    {
        $condition = [
            ['slack_token', '=', $slackUser['slack_token']]
        ];
        $authUser = $this->userRepo->firstWhere($condition);

        if ($authUser) {
            session()->put('slack_token', $slackUser['slack_token']);
            return $authUser;
        } else {
            $user = [
                'name' => $slackUser['name'],
                'email' => $slackUser['email'],
                'slack_id' => $slackUser['slack_id'],
                'images' => $slackUser['images'],
                'slack_token' => $slackUser['slack_token'],
            ];
            session()->put('slack_token', $slackUser['slack_token']);
            $user = $this->userRepo->create($user);
            $this->addRole($user->id, 2);
            return $user;
        }
    }

    public function getInfoSlack($code)
    {
        return $this->slackService->infoSlack($code);
    }

    public function getName($id)
    {
        $condition = [
            ['id', '=', $id]
        ];
        $authUser = $this->userRepo->firstWhere($condition);
        return $authUser->name;
    }

    public function getUserListForAdminView()
    {
        $users = $this->userRepo->with('roles')->get();
        return $users;
    }

    public function delete($id)
    {
        $where = [
            ['id', '=', $id],
        ];
        $this->userRepo->deleteWhere($where);
    }

    public function addRole($id, $idRole)
    {
        $user = $this->userRepo->find($id);
        $user->roles()->attach($idRole);
        return true;
    }

    public function removeRole($id, $idRole)
    {
        $user = $this->userRepo->find($id);
        $user->roles()->detach($idRole);
        return true;
    }

    public function countUserRegistrations()
    {
        $where = [
            ['id', '>', '1']
        ];

        $count = $this->userRepo->countWhere($where);
        return $count;
    }
}
