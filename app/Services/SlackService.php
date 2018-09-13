<?php

namespace App\Services;

use GuzzleHttp\Client;

class SlackService extends BaseService
{
    public function infoSlack($code)
    {
        $client_id = config('services.slack.client_id');
        $client_secret = config('services.slack.client_secret');
        $client = new Client(); //GuzzleHttp\Client
        $result = $client->request(
            'GET',
            "https://slack.com/api/oauth.access?client_id=".$client_id."&client_secret=".$client_secret."&code=".$code
        );
        $b = json_decode($result->getBody()->getContents(), true);

        if ($b['ok'] == true) {
            $userInfo['name'] = $b['user']['name'];
            $userInfo['email'] = $b['user']['email'];
            $userInfo['slack_id'] = $b['user']['id'];
            $userInfo['images'] = $b['user']['image_192'];
            $userInfo['slack_token'] = $b['access_token'];
        }

        return $userInfo;
    }
}
