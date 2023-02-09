<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Models\ContactUs;
use App\Jobs\emailMassive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Twilio\Rest\Client;
use Exception;

class ContactUsController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login','register']]);
    // }
    public function store(Request $request)
    {


        try {
            $ContactUs = ContactUs::create([
                'nombres' => $request->nombres,
                'apellidos' => $request->apellidos,
                'barrio' => $request->barrio,
                'sitio_votacion' => json_encode($request->sitio_votacion),
                'celular' => $request->celular,
                'documento' => $request->documento,
                'lider' => $request->lider,
                'ciudadano_dosque' => $request->ciudadano_dosque,
            ]);

            return response()->json([
                'status' => true,
                'ok' => 'Registro Guardado  ',
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message'=> 'Hubo un error inesperado.' . $th
            ],400);
        }


    }

    public function selectContacts(){
        $contacts = ContactUs::select('nombres', 'apellidos')->get();
        return response()->json(compact('contacts'),200);

    }
    public function massiveEmails(Request $request){

        $details = [
            'title' => $request->title,
            'content' => $request->content,
            'contacts' => $request->contacts
        ];

        emailMassive::dispatch($details);


        return response()->json([
            'status' => true,
            'message'=> 'ok'
        ],200);

    }
    public function smsconfirmation(Request $request){

       try {
        $client = new Client( 'ACf58acbf9ae7f291138fed9090510fef2', '3ee951cccf88dd28920970bdd5c43595' );

        $client->messages->create(
            '+573214921826',
            [
                'from' => '+16088893380',
                'body' => $request->title,
            ]
        );
       } catch (\Throwable $th) {
        return response()->json([
            'status' => true,
            'message'=> "".$th
        ],200);

       }
    }
    public function sitios_votacion(){

        $sitios_votacion = DB::table('sitios_votacion')->get();
        return response()->json(compact('sitios_votacion'),200);

    }
    public function barrios(){

        $barrios = DB::table('barrios')->get();
        return response()->json(compact('barrios'),200);

    }
}
