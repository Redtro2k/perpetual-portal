<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Cache;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LastUserActivity
{
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check()){
            $expiredAt = Carbon::now()->addMinutes(1);
            Cache::put('user-is-online'. Auth::user()->id, true, $expiredAt);
            User::where('id', Auth::user()->id)->update([
                'last_seen' => (new \DateTime())->format("Y-m-d H:i:s")
            ]);
        }

        return $next($request);
    }

}
