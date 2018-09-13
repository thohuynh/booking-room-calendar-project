<?php

namespace App\Repositories;

interface BaseRepositoryInterface
{
    public function all($columns = ['*']);

    public function find($id, $columns = ['*']);

    public function findWhere($where);

    public function first($columns = ['*']);

    public function firstWhere($where);

    public function where(array $where, $columns = ['*']);

    public function whereOrWhere(array $where1, array $where2, $columns = ['*']);

    public function paginate($limit = null, $columns = ['*']);

    public function paginateWhere($where, $limit = null, $columns = ['*']);

    public function create(array $attributes);

    public function firstOrCreate(array $attributes);

    public function orderBy($column, $direction = 'asc');

    public function orderByWhere($where, $column, $direction);

    public function updateWhere(array $attributes, array $where);

    public function delete($id, $columns = ['*']);

    public function deleteWhere($where);

    public function has($relation);

    public function with($relations);

    public function withCount($relations);

    public function whereHas($relation, $closure);

    public function count($columns = ['*']);

    public function countWhere($where);
}
