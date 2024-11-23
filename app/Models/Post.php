<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'content',
        'is_visible',
        'postable_type',
        'postable_id',
    ];

    public function postable()
    {
        return $this->morphTo();
    }
}
