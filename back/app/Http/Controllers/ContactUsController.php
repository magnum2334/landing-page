<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Models\ContactUs;
use App\Jobs\emailMassive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class ContactUsController extends Controller
{
    public function store(Request $request)
    {

        $rules = [
            'email' => 'required|string|email|max:255|unique:contact_us',
          ];
        $messages = array(
            'email.required|unique:contact_us' => 'email ya fue creado.',
        );
        $validator = Validator::make($request->all(), $rules, $messages);
        if($validator->fails()){
            return response($validator->messages(), 401);
        }
        try {
            $ContactUs = ContactUs::create([
                'nombres' => $request->nombres,
                'apellidos' => $request->apellidos,
                'email' => $request->email,
                'celular' => $request->celular,
                'terminos' => $request->terminos,
            ]);

            return response()->json([
                'status' => true,
                'ok' => 'Registro Guardado  ',
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message'=> 'Hubo un error inesperado.' . $th
            ]);
        }


    }
    public function selectContacts(){
        $contacts = ContactUs::select('nombres', 'apellidos','email')->get();
        return response()->json(compact('contacts'),200);

    }
    public function massiveEmails(){

        emailMassive::dispatch();


        return response()->json([
            'status' => true,
            'message'=> 'od'
        ],200);

    }
}
