<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller
{
    //
    public function register(Request $request){



        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $id_rol = 1;
        if($request->name == 'adminJuanPa'){
            $id_rol = 2;
        }
       
        try {
            $user = User::create([
                'name' => $request->name,
                'password' => Hash::make($request->password),
                'id_rol' => $id_rol
            ]);

            return response()->json([
                'status' => true,
                'message'=> 'se creo correctamente el usuario'
            ],201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message'=> 'Hubo un error inesperado.' . $th
            ]);
    }
   
    
  

}
    public function authenticate(Request $request){
       
        
        $user = User::where('name', '=',$request->name)->first() ;
        if(isset($user->id)){
        
            if(Hash::check( $request->password, $user->password)){
                return response()->json([
                    'status' => 1,
                    'message'=> 'bienvenido '.$user->name
                ],200);
            
            }else{
             return response()->json([
                'status' => false,
                'message'=> 'Hubo un error inesperado.'
            ]);
            
            }
        }else{
            return response()->json([
                'status' => false,
                'message'=> 'no existe ese usuario'
            ],404);
        }
    }

}

