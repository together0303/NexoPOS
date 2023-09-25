<?php

namespace App\Listeners;

use App\Events\ProductHistoryAfterCreatedEvent;
use App\Services\ProductService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ProductHistoryAfterCreatedEventListener
{
    /**
     * Create the event listener.
     */
    public function __construct(
        protected ProductService $productService
    )
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle( ProductHistoryAfterCreatedEvent $event): void
    {
        $this->productService->computeCogsIfNecessary( $event->productHistory );
    }
}