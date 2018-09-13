<?php

namespace App\Repositories;

abstract class BaseRepository implements BaseRepositoryInterface
{
    protected $model;

    public function __construct()
    {
        $this->setModel();
    }

    abstract public function getModel();

    public function setModel()
    {
        $this->model = app()->make(
            $this->getModel()
        );
    }

    public function all($columns = ['*'])
    {
        return $this->model->select($columns)->get();
    }

    public function findWhere($where)
    {
        return $this->model->where($where)->get();
    }

    public function whereOrWhere(array $where1, array $where2, $columns = ['*'])
    {
        return $this->model->where($where1)->orWhere($where2)->get();
    }

    public function where(array $where, $columns = ['*'])
    {
        return $this->model->select($columns)->where($where)->get();
    }

    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    public function firstOrCreate(array $attributes)
    {
        return $this->model->firstOrCreate($attributes);
    }

    public function updateWhere(array $attributes, array $where)
    {
        $model = $this->model->where($where);

        if (empty($model)) {
            return false;
        }

        return $model->update($attributes);
    }

    public function deleteWhere($where)
    {
        $model = $this->model->where($where);

        if (empty($model)) {
            return false;
        }

        return $model->delete();
    }

    public function first($columns = ['*'])
    {
        return $this->model->select($columns)->first();
    }

    public function find($id, $columns = ['*'])
    {
        return $this->model->select($columns)->find($id);
    }

    public function paginate($limit = 15, $columns = ['*'])
    {
        return $this->model->paginate($limit, $columns);
    }

    public function with($relations)
    {
        return $this->model->with($relations);
    }

    public function withCount($relations)
    {
        return $this->model->withCount($relations);
    }

    public function whereHas($relation, $closure)
    {
        $this->model = $this->model->whereHas($relation, $closure);
        return $this;
    }

    public function orderBy($column, $direction = 'asc')
    {
        return $this->model->orderBy($column, $direction)->get();
    }

    public function has($relation)
    {
        return $this->model->has($relation);
    }

    public function count($columns = ['*'])
    {
        return $this->model->select($columns)->count();
    }

    public function hasRole($role)
    {
        $d = $this->model->roles()->where('name', '=', $role)->get();
        if ($d->isNotEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    public function firstWhere($where)
    {
        return $this->model->where($where)->first();
    }

    public function orderByWhere($where, $column, $direction)
    {
        return $this->model->where($where)->orderBy($column, $direction)->get();
    }

    public function paginateWhere($where, $limit = 15, $columns = ['*'])
    {
        return $this->model->where($where)->paginate($limit, $columns);
    }

    public function delete($id, $columns = ['*'])
    {
        $model = $this->model->select($columns)->find($id);

        if (empty($model)) {
            return false;
        }

        return $model->delete();
    }

    public function countWhere($where)
    {
        return $this->model->where($where)->count();
    }
}
